# TeamA-Backend - Vet

Creating Vet Apps. This app has RESTful endpoint for Vet Apps CRUD operation

# RESTful endpoints

## User

### GET https://vet-booking.herokuapp.com/user
Get User
```
Request Header : not needed
```
```
Request Body: not needed
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menampilkan semua user!",
  "data": [
    {
      "image": "<user image>",
      "_id": "<user id>",
      "name": "<user name>",
      "email": "<user email>",
      "phone": "<user phone>",
      "role": "<user role>",
      "clinic/patient/veterinary": {
        <clinic/patient/veterinary attributes>
      }
      "createdAt": "<user createdAt>",
      "updatedAt": "<user updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```
### POST https://vet-booking.herokuapp.com/user/register
Register User
```
Request Header : not needed
```
```
Request Body: {
  "name": "<user name>",
  "email": "<user email>",
  "phone": "<user phone>",
  "password": "<user password>",
  "role": "<user role>"
}
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil register!",
  "access_token": "<access_token>"
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### POST https://vet-booking.herokuapp.com/user/login
Login User
```
Request Header : not needed
```
```
Request Body: {
  "email": "<user email>",
  "password": "<user password>",
}
```
```
Response: (200 - OK){
  "success": true,
  "message": "Login berhasil!",
  "access_token": "<access_token>"
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### GET https://vet-booking.herokuapp.com/user/edit
Find User By Id
```
Request Header : {
  "access_token": "<access_token>"
}
```
```
Request Body: not needed
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menampilkan user!",
  "data": {
      "image": "<user image>",
      "_id": "<user id>",
      "name": "<user name>",
      "email": "<user email>",
      "phone": "<user phone>",
      "role": "<user role>",
      "clinic/patient/veterinary": {
        <clinic/patient/veterinary attributes>
      }
      "createdAt": "<user createdAt>",
      "updatedAt": "<user updatedAt>"
  }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### PUT https://vet-booking.herokuapp.com/user/edit
Edit User
```
Request Header : {
  "access_token": "<access_token>"
}
```
```
Request Body: {
  "image": "<user image>",
  "nama": "<user nama>",
  "gender": "<user gender>",
  "phone": "<user phone>",
  patient/clinic/veterinary attributes
}
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil memperbarui user!",
  "data": {
      "image": "<user image>",
      "_id": "<user id>",
      "name": "<user name>",
      "email": "<user email>",
      "phone": "<user phone>",
      "role": "<user role>",
      "clinic/patient/veterinary": {
        <clinic/patient/veterinary attributes>
      }
      "createdAt": "<user createdAt>",
      "updatedAt": "<user updatedAt>"
  }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### DELETE https://vet-booking.herokuapp.com/user
Delete User 
```
Request Header : {
  "access_token": "<access_token>"
}
```
```
Request Body: not needed
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menghapus user!",
  "data": {
      "image": "<user image>",
      "_id": "<user id>",
      "name": "<user name>",
      "email": "<user email>",
      "phone": "<user phone>",
      "role": "<user role>",
      "clinic/patient/veterinary": {
        <clinic/patient/veterinary attributes>
      }
      "createdAt": "<user createdAt>",
      "updatedAt": "<user updatedAt>"
  }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

## Role

### GET https://vet-booking.herokuapp.com/role
Get Role 
```
Request Header : not needed
```
```
Request Body: not needed
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menapilkan semua role!",
  "data": [
    {
      "_id": "<role id>",
      "name": "<role name>",
      "createdAt": "<role createdAt>",
      "updatedAt": "<role updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```
## Animal Type

### GET https://vet-booking.herokuapp.com/animal-type
Get Animal Types
```
Request Header : not needed
```
```
Request Body: not needed
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menapilkan semua Animal Type!",
  "data": [
    {
      "_id": "<AnimalType id>",
      "type": "<AnimalType type>",
      "createdAt": "<AnimalType createdAt>",
      "updatedAt": "<AnimalType updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### POST https://vet-booking.herokuapp.com/animal-type
Add Animal Types
```
Request Header : not needed
```
```
Request Body: {
  "type": "<animalType type>"
}
```
```
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menambah Animal Type!",
  "data": {
    "_id": "<AnimalType id>",
    "type": "<AnimalType type>",
    "createdAt": "<AnimalType createdAt>",
    "updatedAt": "<AnimalType updatedAt>"
  }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### DELETE https://vet-booking.herokuapp.com/animal-type
Add Animal Types
```
Request Header : not needed
```
```
Request Body: {
  "type": "<animalType type>"
}
```
```
Response: (200 - OK){
  "success": "true",
  "message": "Berhasil menghapus Animal Type!",
  "data": {
    "_id": "<AnimalType id>",
    "type": "<AnimalType type>",
    "createdAt": "<AnimalType createdAt>",
    "updatedAt": "<AnimalType updatedAt>"
  }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

## Animal

### GET https://vet-booking.herokuapp.com/animal
Get all Animal
```
Request Header : not needed
```
```
Request Body: not needed
```
``` 
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menapilkan semua animals!",
  "data": [
    {
      "_id": "<animal id>",
      "name": "<animal name>",
      "type": "<animal type>",
      "gender": "<animal gender>",
      "createdAt": "<animal createdAt>",
      "updatedAt": "<animal updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### POST https://vet-booking.herokuapp.com/animal/add
Add Animal to Patient
```
Request Header : {
  "access_token": "<access_token>"
}
```
```
Request Body: {
  "name": "<animal name>",
  "type": "<animal type>",
  "gender": "<animal gender>"
}
```
``` 
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menapilkan semua role!",
  "data": [
    {
      "_id": "<animal id>",
      "name": "<animal name>",
      "type": "<animal type>",
      "gender": "<animal gender>",
      "createdAt": "<animal createdAt>",
      "updatedAt": "<animal updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### GET https://vet-booking.herokuapp.com/animal/user
Get Animal By Patient
```
Request Header : {
  "access_token": "<access_token>"
}
```
```
Request Body: not needed
```
``` 
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menapilkan semua Animals!",
  "data": [
    {
      "_id": "<animal id>",
      "name": "<animal name>",
      "type": "<animal type>",
      "gender": "<animal gender>",
      "createdAt": "<animal createdAt>",
      "updatedAt": "<animal updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### DELETE https://vet-booking.herokuapp.com/animal/remove/:id
Remove an Animal in Patient
```
Request Header : {
  "access_token": "<access_token>"
}
```
```
Request Body: not needed
```
``` 
Response: (200 - OK){
  "success": true,
  "message": "Berhasil menapilkan Animals!",
  "data": [
    {
      "_id": "<animal id>",
      "name": "<animal name>",
      "type": "<animal type>",
      "gender": "<animal gender>",
      "createdAt": "<animal createdAt>",
      "updatedAt": "<animal updatedAt>"
    }
  ]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

## Clinic

### GET https://vet-booking.herokuapp.com/clinic
Get all Clinic
```
Request Header : not needed
```
```
Request Body: not needed
```
``` 
Response: (200 - OK){
{
    "success": true,
    "message": "Successfully retrieve the role!",
    "data": [{
        "image": "<user image>",
        "_id": "<user id>",
        "name": "<user name>",
        "email": "<user email>",
        "phone": "<user phone>",
        "role": "clinic",
        "clinic": {
            "city": "<clinic city>",
            "address": "<clinic address>",
            "schedules": [{
                    "clinic": "<user id(clinic)>",
                    "veterinary": "<user id(veterinary)>",
                    "isBooked": true/false,
                    "_id": "<schedule id>",
                    "day": <schedule date>,
                    "shift": <schedule shift>,
                    "createdAt": "<schedule createdAt>",
                    "updatedAt": "<schedule ureatedAt>"
                },
            ],
            "facilities": [],
            "chats": [],
            "reservations": [],
            "_id": "<clinic id>",
            "createdAt": "<clinic createdAt>",
            "updatedAt": "<clinic updatedAt>",
            "about": "<clinic about>"
        },
        "createdAt": "<user createdAt>",
        "updatedAt": "<user createdAt>"
    }]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### POST https://vet-booking.herokuapp.com/clinic/add
Menambah Schedule ke Clinic
```
Request Header : <access_token>
```
```
Request Body: {
  VetId: "<user id(veterinary)>",
  day: "<schedule day>",
  shift: "<schedule shift>",
}
```
``` 
Response: (200 - OK){
    "success": true,
    "message": "Veterinary berhasil ditambahkan ke Clinic!",
    "data": {
        "schedules": [{
            "clinic": "user id<clinic>",
            "veterinary": {
                "image": "<user image>",
                "_id": "<user id>",
                "name": "<user name>",
                "email": "<user email>",
                "phone": "<user phone>",
                "password": "<user password>",
                "role": "veterinary",
                "veterinary": "<user id(veterinary)>",
                "createdAt": "<user createdAt>",
                "updatedAt": "<user updatedAt>"
            },
            "isBooked": true/false,
            "_id": "<schedule id>",
            "day": <schedule day>,
            "shift": <schedule shift>,
            "createdAt": "<schedule createdAt>",
            "updatedAt": "<schedule ureatedAt>"
        }, ],
        "_id": "<clinic id>"
    }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### DELETE https://vet-booking.herokuapp.com/clinic/remove/:ScheduleId
Remove Veterinary in Clinic
```
Request Header : <access_token>
```
```
Request Body: <access_token>
```
``` 
Response: (200 - OK){
{
    "success": true,
    "message": "Berhasil menghapus Veterinary dari Clinic!",
    "data": [{
        "image": "<user image>",
        "_id": "<user id>",
        "name": "<user name>",
        "email": "<user email>",
        "phone": "<user phone>",
        "role": "clinic",
        "clinic": {
            "city": "<clinic city>",
            "address": "<clinic address>",
            "schedules": [{
                    "clinic": "<user id(clinic)>",
                    "veterinary": "<user id(veterinary)>",
                    "isBooked": true/false,
                    "_id": "<schedule id>",
                    "day": <schedule date>,
                    "shift": <schedule shift>,
                    "createdAt": "<schedule createdAt>",
                    "updatedAt": "<schedule ureatedAt>"
                },
            ],
            "facilities": [],
            "chats": [],
            "reservations": [],
            "_id": "<clinic id>",
            "createdAt": "<clinic createdAt>",
            "updatedAt": "<clinic updatedAt>",
            "about": "<clinic about>"
        },
        "createdAt": "<user createdAt>",
        "updatedAt": "<user createdAt>"
    }]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```
### POST https://vet-booking.herokuapp.com/clinic/facility
Add Facilities to Clinic
```
Request Header : <access token>
```
```
Request Body: {
  facilities: "<facility id>"
}
```
``` 
Response: (200 - OK){
    "success": true,
    "message": "Facility berhasil ditambahkan ke Clinic!",
    "data": {
        "successToAdd": [
            {
                "name": "<facility name>",
                "_id": "<facility id>"
            },
        ],
        "failedToAdd": [
            {
                "name": "<facility name>",
                "_id": "<facility id>"
            }
        ]
    }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### DELETE https://vet-booking.herokuapp.com/clinic/facility
Remove Facilities from Clinic
```
Request Header : <access token>
```
```
Request Body: {
  facilities: "<facility id>"
}
```
``` 
Response: (200 - OK){
    "success": true,
    "message": "Facility berhasil dihapus dari Clinic!",
    "data": {
        "successToRemove": [
            {
                "name": "<facility name>",
                "_id": "<facility id>"
            },
        ],
        "failedToRemove": [
            {
                "name": "<facility name>",
                "_id": "<facility id>"
            }
        ]
    }
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### GET https://vet-booking.herokuapp.com/clinic/filter/?city:clinicCity
Get Clinic Filtered
```
Request Header : not needed
```
```
Request Body: {
  facilities: "<facility id>"
}
```
``` 
Response: (200 - OK){
{
    "success": true,
    "message": "Sukses filter Clinic!",
    "data": [{
        "image": "<user image>",
        "_id": "<user id>",
        "name": "<user name>",
        "email": "<user email>",
        "phone": "<user phone>",
        "role": "clinic",
        "clinic": {
            "city": "<clinic city>",
            "address": "<clinic address>",
            "facilities": [{
                "name": "<facility name>",
                "_id": "<facility id>"
            }],
            "_id": "<clinic id>",
            "about": "<clinic about>"
        }
    }]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

## Schedule

### GET https://vet-booking.herokuapp.com/schedule
Get all Schedule
```
Request Header : not needed
```
```
Request Body: not needed
```
``` 
Response: (200 - OK){
    "success": true,
    "message": "Berhasil menampilkan semua Schedule!",
    "data": [{
        "clinic": "<user id(clinic)>",
        "veterinary": "<user id(veterinary)>",
        "isBooked": true/false,
        "_id": "<schedule id>",
        "day": "<schedule day>",
        "shift": "<schedule shift>",
        "createdAt": "<schedule createdAt>",
        "updatedAt": "<schedule updatedAt>"
    }]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

### GET https://vet-booking.herokuapp.com/schedule/:ClinicId
Get Schedule by Time
```
Request Header : not needed
```
```
Request Body: {
  day: "<schedule day>",
  shift: "<schedule shift>"
}
```
``` 
Response: (200 - OK){
    "success": true,
    "message": "Berhasil menampilkan semua Schedule!",
    "data": [{
        "clinic": "<user id(clinic)>",
        "veterinary": "<user id(veterinary)>",
        "isBooked": true/false,
        "_id": "<schedule id>",
        "day": "<schedule day>",
        "shift": "<schedule shift>",
        "createdAt": "<schedule createdAt>",
        "updatedAt": "<schedule updatedAt>"
    }]
}
```
```
Response: (400 - Bad Request){
  "success": false,
  "message": "<error message>",
}
```

## Facility