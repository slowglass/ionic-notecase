/**
    ".tag": "file",
    "name": "Prime_Numbers.txt",
    "id": "id:a4ayc_80_OEAAAAAAAAAXw",
    "client_modified": "2015-05-12T15:50:38Z",
    "server_modified": "2015-05-12T15:50:38Z",
    "rev": "a1c10ce0dd78",
    "size": 7212,
    "path_lower": "/homework/math/prime_numbers.txt",
    "path_display": "/Homework/math/Prime_Numbers.txt",
    "sharing_info": {
        "read_only": true,
        "parent_shared_folder_id": "84528192421",
        "modified_by": "dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc"
    },
    "property_groups": [
        {
            "template_id": "ptid:1a5n2i6d3OYEAAAAAAAAAYa",
            "fields": [
                {
                    "name": "Security Policy",
                    "value": "Confidential"
                }
            ]
        }
    ],
    "has_explicit_shared_members": false
*/    
export class Note {
  "tag": string; // Eventually enum
  "name": string;
  "id": string;
  "server_modified": string; // Eventually date
  "rev": string;
  "size": number;
  "path_lower": string;
  "path_display": string;
}