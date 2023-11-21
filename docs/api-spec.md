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
        "link": "drive.google.com",
    },
    "anggota" : {
        {
            "id": 3,
            "nama": "Rafie Ramadhan Al Aziz Zein",
            "role": "Staff Muda",
            "status": "HADIR",
        },
        {
            "id": 4,
            "nama": "Afif Haidar Prajaputra",
            "role": "Kepala Biro",
            "status": "HADIR",
        },
        ...
    }
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