const data =
{
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder :true,
            items:
            [
                {
                    name: "index.html",
                    isFolder:false,
                }
            ]
        },
        {
            name : "src",
            isFolder: true,
            items :
            [
                {
                    name: "index.js",
                    isFolder: false
                },
                {
                    name: "style.css",
                    isFolder: false
                },
                {
                    name: "components",
                    isFolder: true,
                    items:
                    [
                        {
                            name: "Explorer.jsx",
                            isFolder:false
                        }
                    ]
                },
                {
                    name: "constant",
                    isFolder: true,
                    items: [
                        {
                            name: "data.js",
                            isFolder:false
                        }
                    ]
                },
            ]
        },

        {
            name: "package.json",
            isFolder: false,
        }



    ]
}

export default data