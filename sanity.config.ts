import {deskTool} from 'sanity/desk'

export const config = {
    projectId: '0ep9en37',
    dataset: 'production',
    title: 'Test Data',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {
        types: [
            {
                name: 'item',
                title: 'items',
                type: 'document',
                fields: [
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                    },
                    {
                        name: 'slug',
                        title: 'Slug',
                        type: 'slug',
                        options: {
                            source: 'name',
                        }
                    },
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                            hotspot: true,
                        },
                    },
                    {
                        name: 'content',
                        title: 'Content',
                        type: 'array',
                        of: [
                            {type: 'block',}
                        ]

                    }  
                ],
            },
        ]
    }
}