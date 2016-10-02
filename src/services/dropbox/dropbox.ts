import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Note } from '../../note';
import 'rxjs/Rx';


@Injectable()
export class DropboxService {
    token: string;
    tree: Map<string, Map<string, Note>>;

    constructor(private http: Http) {
        console.log("Dropbox : constructor");
        this.token = "3wsLXh8GbvUAAAAAAAAUagzM6j17BZJjTrQXMewcgI5vVD-vR-kA02sMSe7m9CYd";
        this.tree = new Map<string, Map<string, Note>>();
        this.updateTree();
    }

    getDirectory(dir: string) {
        if (this.tree.has(dir))
            return this.tree.get(dir);
        else
            return new Map<string, Note>()
    }

    processNote(n: any) { 
        if (n.name.startsWith(".")) return;
        let note: Note = {
            "tag": n[".tag"],
            "name": n.name,
            "id": n.id,
            "server_modified": n.server_modified,
            "rev": n.rev,
            "size": n.size,
            "path_lower": n.path_lower,
            "path_display": n.path_display
        };

       console.log("Processed path:" + note.path_display);
        let key = note.path_lower;
        let dir = key.substring(0, key.lastIndexOf('/'));
        let files = this.tree.get(dir);
        if (files == undefined) {
            files = new Map<string, Note>();
            this.tree.set(dir, files);
        }
        files.set(key, note);
    }

    processTree(data) {
        // Error on has_more at the moment.
        if (data.has_more) console.log("Error files bigger than intial download");

        //this.cursor = data.cursor;
        for (var e of data.entries)
            this.processNote(e);

    }

    updateTree(dataCB?: Function, errCB?: Function) {
        console.log("Dropbox : updateTree");
        var $$ = this;
        let url = 'https://api.dropboxapi.com/2/files/list_folder';
        let body = '{"path":"","recursive":true, "include_deleted": true, "include_media_info": true}';
        var headers = new Headers();
        headers.append('Authorization', "Bearer " + $$.token);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            data => { $$.processTree(data); if (dataCB !== undefined) dataCB(data); },
            err => { console.log(err); if (errCB !== undefined) errCB(err); },
            () => console.log('Directory Downloaded')
            );
    }
}