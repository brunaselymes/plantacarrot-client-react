export const allProjects = [
    {
        "id": 1,
        "title": "Project One",
        "description": "The first project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2020-03-20T14:22:23.382748Z",
        "owner": 1
    },
    {
        "id": 2,
        "title": "Project Two",
        "description": "The second project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2020-03-20T18:28:23.382748Z",
        "owner": 1
    },
    {
        "id": 3,
        "title": "Project Three",
        "description": "The third project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2020-02-20T14:28:23.382748Z",
        "owner": 1
    },
    {
        "id": 4,
        "title": "Project Four",
        "description": "The fourth project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2020-03-20T14:28:23.382748Z",
        "owner": 2
    },
    {
        "id": 5,
        "title": "Project Five",
        "description": "The fifth project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2019-03-20T12:28:23.382748Z",
        "owner": 2
    },
    {
        "id": 6,
        "title": "Project Six",
        "description": "The sixth project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2020-03-20T14:28:23.382748Z",
        "owner": 1
    },
    {
        "id": 7,
        "title": "Project Seven",
        "description": "The seventh project.",
        "goal": 150,
        "image": "https://via.placeholder.com/300.jpg",
        "is_open": false,
        "date_created": "2020-02-20T14:28:23.382748Z",
        "owner": 2
    }
];

export const oneProject =
{
    id: 1,
    title: "Project One",
    description: "The first project.",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: false,
    date_created: "2020-03-20T14:22:23.382748Z",
    owner: 1,
    pledges: [
        {
            id: 1,
            amount: 100,
            comment: "A comment for the pledge",
            anonymous: false,
            supporter: 3,
            project_id: 1,
        },
    ],
};