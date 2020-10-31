const contacts = [
    {
    id: "1",
    name: "Tonya Burns",
    email: "tonya.burns@example.com",
    phone: "(746)-523-9503",
    picture: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
    id: "2",
    name: "Jeffery Boyd",
    email: "jeffery.boyd@example.com",
    phone: "(421)-239-3059",
    picture:   "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
    id: "3",
    name: "Tyrone Barnett",
    email: "tyrone.barnett@example.com",
    phone: "(391)-815-8235",
    picture: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
    id: "4",
    name: "Sophie Pierce",
    email: "sophie.pierce@example.com",
    phone: "(303)-870-9680",
    picture: "https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
    id: "5",
    name: "Howard Miller",
    email: "howard.miller@example.com",
    phone: "(011)-343-0981",
    picture: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
    id: "6",
    name: "Norma Rice",
    email: "norma.rice@example.com",
    phone: "(624)-045-8622",
    picture: "https://randomuser.me/api/portraits/women/93.jpg" 
    },
    {
    id: "7",
    name: "Kirk Torres",
    email: "kirk.torres@example.com",
    phone: "(177)-205-6258",
    picture: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    {
    id: "8",
    name: "Bertha Allen",
    email: "bertha.allen@example.com",
    phone: "(013)-173-9903",
    picture: "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
    id: "9",
    name: "Ernest Ellis",
    email: "ernest.ellis@example.com",
    phone: "(179)-120-0674",
    picture: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
    id: "10",
    name: "Gabriel Miller",
    email: "gabriel.miller@example.com",
    phone: "(880)-966-1519",
    picture: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
    id: "11",
    name: "Henry Steward",
    email: "henry.steward@example.com",
    phone: "(095)-393-3955",
    picture: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
    id: "12",
    name: "Tommy Curtis",
    email: "tommy.curtis@example.com",
    phone: "(852)-700-8177",
    picture: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
    id: "13",
    name: "Dana Thompson",
    email: "dana.thompson@example.com",
    phone: "(567)-803-9792",
    picture: "https://randomuser.me/api/portraits/women/59.jpg"
    },
    {
    id: "14",
    name: "Kim Ferguson",
    email: "kim.ferguson@example.com",
    phone: "(524)-773-9527",
    picture: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
    id: "15",
    name: "Herminia Weaver",
    email: "herminia.weaver@example.com",
    phone: "(321)-452-7673",
    picture: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
    id: "16",
    name: "Chloe Cole",
    email: "chloe.cole@example.com",
    phone: "(617)-985-8784",
    picture: "https://randomuser.me/api/portraits/women/83.jpg"
    },
    {
    id: "17",
    name: "Dora Murphy",
    email: "dora.murphy@example.com",
    phone: "(197)-780-3054",
    picture: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
    id: "18",
    name: "Annette Welch",
    email: "annette.welch@example.com",
    phone: "(849)-648-7739",
    picture: "https://randomuser.me/api/portraits/women/93.jpg"
    },
    {
    id: "19",
    name: "Katrina Barnes",
    email: "katrina.barnes@example.com",
    phone: "(754)-084-9639",
    picture: "https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
    id: "20",
    name: "Harold Welch",
    email: "harold.welch@example.com",
    phone: "(307)-044-6575",
    picture: "https://randomuser.me/api/portraits/men/73.jpg"
    },
    {
    id: "21",
    name: "Daryl Oliver",
    email: "daryl.oliver@example.com",
    phone: "(297)-326-8881",
    picture: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
    id: "22",
    name: "Laurie Weaver",
    email: "laurie.weaver@example.com",
    phone: "(607)-787-1221",
    picture: "https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
    id: "23",
    name: "Carter Ray",
    email: "carter.ray@example.com",
    phone: "(678)-593-4114",
    picture: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
    id: "24",
    name: "Bobby Bates",
    email: "bobby.bates@example.com",
    phone: "(649)-827-9426",
    picture: "https://randomuser.me/api/portraits/men/0.jpg"
    },
    {
    id: "25",
    name: "Alberto Powell",
    email: "alberto.powell@example.com",
    phone: "(610)-891-5345",
    picture: "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
    id: "26",
    name: "Arianna Morris",
    email: "arianna.morris@example.com",
    phone: "(874)-900-6743",
    picture: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
    id: "27",
    name: "Bruce Dunn",
    email: "bruce.dunn@example.com",
    phone: "(628)-409-0994",
    picture: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
    id: "28",
    name: "Heidi Austin",
    email: "heidi.austin@example.com",
    phone: "(820)-679-4137",
    picture: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
    id: "29",
    name: "Richard Wheeler",
    email: "richard.wheeler@example.com",
    phone: "(607)-222-2777",
    picture: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
    id: "30",
    name: "Josephine Perry",
    email: "josephine.perry@example.com",
    phone: "(905)-617-0254",
    picture: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
    id: "31",
    name: "Manuel Mitchelle",
    email: "manuel.mitchelle@example.com",
    phone: "(816)-217-7340",
    picture: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
    id: "32",
    name: "Kelly Berry",
    email: "kelly.berry@example.com",
    phone: "(248)-960-3971",
    picture: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
    id: "33",
    name: "Dianne Gray",
    email: "dianne.gray@example.com",
    phone: "(337)-630-2930",
    picture: "https://randomuser.me/api/portraits/women/15.jpg"
    },
    {
    id: "34",
    name: "Gertrude Brewer",
    email: "gertrude.brewer@example.com",
    phone: "(046)-719-6924",
    picture: "https://randomuser.me/api/portraits/women/88.jpg"
    },
    {
    id: "35",
    name: "Brandie Pena",
    email: "brandie.pena@example.com",
    phone: "(664)-916-4487",
    picture: "https://randomuser.me/api/portraits/women/40.jpg"
    }
    ]