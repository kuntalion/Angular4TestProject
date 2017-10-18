export interface Task {
    Frequency;
    Name;
    LastRunDate;
    Type;
}

export var tasks = [
    {
        "TaskGuid": "28dbb7e6-2a01-470d-994a-a0dc51faacad",
        "Name": "All Day Event",
        "Description": "Something quiet important1",
        "LastRunAt": "2017-10-18"
    },
    {
        "TaskGuid": "fe75417b-6f11-4ab7-9fec-9a0f0f418848",
        "Name": "Long Event",
        "Description": "Something quiet important2",
        "LastRunAt": "2017-10-18"
    },
    {
        "TaskGuid": "3ac3e50b-0cbb-4f3f-bd37-136bc657bdd4",
        "Name": "Repeating Event",
        "Description": "Something quiet important3",
        "LastRunAt": "2017-10-18 18:00:00"
    },
    {
        "TaskGuid": "f8e00acf-b018-4a98-931e-88637f7b232a",
        "Name": "Repeating Event2",
        "Description": "Something quiet important4",        
        "LastRunAt": "2017-10-17 10:00:00",
    },
    {
        "TaskGuid": "f3f24389-68f9-4b12-9a65-2ad3b549effb",
        "Name": "Conference",
        "LastRunAt": "2017-10-16",
        "Description": "Something quiet important4",    
    }
];