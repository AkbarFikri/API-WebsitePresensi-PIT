# SPEC

## GET ALL USERS

endpoint : GET /users

Respons Data Spec
```json
{
    "status" : 200
    "data" : {
        "nama": "Akbar Fikri Abdillah",
        "role": "Staff Muda"
    },
    {
        "nama": "Firza Aurellia Iskandar",
        "role": "Staff Muda"
    },
    {
        "nama": "Rafie Ramadhan Al Aziz Zein",
        "role": "Staff Muda"
    },
    ....
}
```

## CREATE NEW ABSEN

Endpoint : POST /absensi

Expect Request Data

```json
{
    "rapat" : {
        "ke": "1",
        "tanggal": "2023-11-21",
        "tempat": "Flava Coffee",
        "link": "drive.google.com"
    },
    "anggota" : [
        {
            "user_id": 1,
            "status": "HADIR"
        },
        {
            "user_id": 2,
            "status": "HADIR"
        },
        {
            "user_id": 3,
            "status": "HADIR"
        }
    ]
}
```

Expect Response Data

```json
{
    "status" : 200,
    "data" : {
        "massage" : "Berhasil Di Tambahkan"
    }
}
```

## GET RAPAT LIST

Endpoint : GET /rapat

Expect Request Data

```json
{

}
```

Expect Response Data

```json
{
    "status": 200,
    "data": [
        {
            "id": 19,
            "ke": "1",
            "tanggal": "2023-11-21",
            "tempat": "Flava Coffee"
        },
        {
            "id": 20,
            "ke": "1",
            "tanggal": "2023-11-21",
            "tempat": "Flava Coffee"
        }
        ...
    ]
}
```

## GET ABSENSI DATA BY RAPAT ID

Endpoint : GET /absensi/:rapat_id

Expect Request Data

```json
{
    "rapat_id" : 24 
}
```

Expect Response Data

```json
{
    "status": 200,
    "data": {
        "rapat": {
            "id": 24,
            "ke": "1",
            "tanggal": "2023-11-21",
            "tempat": "Flava Coffee",
            "link": "drive.google.com"
        },
        "absensi": [
            {
                "rapat_id": 24,
                "user_id": 1,
                "status": "HADIR"
            },
            {
                "rapat_id": 24,
                "user_id": 2,
                "status": "HADIR"
            },
            {
                "rapat_id": 24,
                "user_id": 3,
                "status": "HADIR"
            },
            {
                "rapat_id": 24,
                "user_id": 4,
                "status": "HADIR"
            },
            {
                "rapat_id": 24,
                "user_id": 5,
                "status": "HADIR"
            },
            {
                "rapat_id": 24,
                "user_id": 6,
                "status": "HADIR"
            },
            {
                "rapat_id": 24,
                "user_id": 7,
                "status": "HADIR"
            }
        ]
    }
}
```