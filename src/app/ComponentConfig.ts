export type ComponentType = 'view' | 'text' | 'image';

export interface ComponentStyle {
    [key: string]: string | number | boolean;
}

export interface ComponentConfig {
    type?: ComponentType;
    style?: ComponentStyle;
    tyle?: ComponentStyle; // Handle typo in JSON
    children?: ComponentConfig[];
    content?: string;
    url?: string;
    id?: string;
    name?: string;
}
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

export const demo1: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "column",
        "padding": 16,
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8
    },
    "children": [
        {
            "type": "image",
            "style": {
                // fillWidth is not supported in react-native, we replace it with width: '100%' before rendering the UI.
                "fillWidth": true,
                "aspectRatio": "100/100",
                "borderRadius": 8,
                "contentScale": "crop"
            },
            "url": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "row",
                "marginLeft": 12,
                "marginRight": 12,
                "marginTop": 12,
                "marginBottom": 12
            },
            "children": [
                {
                    "type": "view",
                    "style": {
                        "flexDirection": "column",
                        "flex": 1
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 18,
                                "fontWeight": "400",
                                "marginBottom": 12,
                                "borderRadius": 8
                            },
                            "content": "Title 1"
                        },
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 16
                            },
                            "content": "Subtitle 1"
                        }
                    ]
                },
                {
                    "type": "view",
                    "style": {
                        "flexDirection": "column",
                        "flex": 1
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 18,
                                "fontWeight": "400",
                                "borderRadius": 8
                            },
                            "content": "Title 2"
                        },
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 16
                            },
                            "content": "Subtitle 2"
                        }
                    ]
                }
            ]
        }
    ]
}

export const demo2: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "row",
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8
    },
    "children": [
        {
            "type": "view",
            "style": {
                "flexDirection": "box",
                "width": "25%"
            },
            "children": [
                {
                    "type": "image",
                    "style": {
                        "flex": 1,
                        "borderRadius": 8,
                        "contentScale": "crop"
                    },
                    "url": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
                }
            ]
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "column",
                "padding": 14,
                "marginLeft": 12,
                "flex": 1,
                "justifyContent": "top"
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 18,
                        "fontWeight": "400",
                        "marginBottom": 12,
                        "borderRadius": 8
                    },
                    "content": "Testing Adobe images"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 16
                    },
                    "content": "This image is picked from web"
                }
            ]
        }
    ]
}
export const demo22: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "row",
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8,
        "alignItems": "stretch" // Ensure children stretch vertically
    },
    "children": [
        {
            "type": "view",
            "style": {
                // "flexDirection": "box", // This might be a typo, usually "column" or "row"
                "width": "30%",
                "alignSelf": "stretch" // Make this view stretch vertically
            },
            "children": [
                {
                    "type": "image",
                    "style": {
                        // "flex": 1, // Removed flex: 1
                        "height": "100%", // Added height: 100%
                        "width": "100%",  // Added width: 100%
                        "borderRadius": 8,
                        "contentScale": "cover" // Changed from crop to cover for better scaling
                    },
                    "url": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
                }
            ]
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "column",
                "padding": 14,
                "marginLeft": 12,
                "flex": 1,
                // "justifyContent": "top" // Removed justifyContent
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 18,
                        "fontWeight": "400",
                        "marginBottom": 12,
                        "borderRadius": 8
                    },
                    "content": "Testing Adobe images"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 16
                    },
                    "content": "This image is picked from web"
                }
            ]
        }
    ]
};

export const demo3: ComponentConfig =
{
    "type": "view",
    "style": {
        "flexDirection": "box",
        "alignItems": "center",
        "padding": 16,
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8
    },
    "children": [
        {
            "type": "image",
            "style": {
                "width": "100%",
                "aspectRatio": "1",
                "borderRadius": 8,
                "contentScale": "crop",
            },
            "url": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
        },
        {
            "type": "text",
            "style": {
                "fontSize": 18,
                "fontWeight": "bold",
                "color": "#FFFFFF",
                "padding": 8,
                "borderRadius": 4,
                "justifyContent": "bottom"
            },
            "content": "This is an image only template"
        },

    ]
}

export const ui_test: ComponentConfig = {
    "id": "MainContainer",
    "name": "Main Container",
    "style": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "padding": 16,
        "backgroundColor": "white"
    },
    "type": "view",
    "children": [
        {
            "type": "image",
            "style": { "height": 60, "width": 60 },
            "children": [],
            "content": "https://va7stagevarysstorage.blob.core.windows.net/content-generated/dbdda16d-5cb5-495b-aaca-bbeae33da2e9/firefly/7f968049-c660-4b84-bb91-d8bf54d29d2a.jpeg?st=2025-04-04T16:54:06Z&se=2025-05-04T16:54:06Z&sp=r&sv=2023-01-03&sr=b&sig=xWj/i54rIcABs2dqSkneKe8cdbmw8QOGoR4Ho3p2KCs="
        },
        {
            "type": "view",
            "id": "Container",
            "name": "Text Container",
            "style": { "display": "flex", "flexDirection": "column", "marginLeft": 16 },
            "children": [
                {
                    "children": [],
                    "content": "Title Text",
                    "type": "text",
                    "style": { "fontSize": 14, "fontWeight": "bold" }
                },
                {
                    "children": [],
                    "content": "Body Text",
                    "type": "text",
                    "style": { "fontSize": 12 }
                }
            ]
        }
    ]
}


// Sample data objects for reference
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sampleData1: ComponentConfig = {
    'type': 'view',
    'style': {
        'flexDirection': 'row',
        'padding': 16,
    },
    'children': [
        {
            'type': 'view',
            'children': [
                {
                    'type': 'image',
                    'tyle': {
                        'width': 90,
                        'height': 90,
                        'marginBottom': 12,
                        'borderRadius': 8,
                    },
                    'content': 'https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg',
                },
            ],
        },
        {
            'type': 'view',
            'style': {
                'flexDirection': 'column',
                'padding': 14,
                'marginLeft': 12,
            },
            'children': [
                {
                    'type': 'text',
                    'tyle': {
                        'fontSize': 18,
                        'fontWeight': '400',
                    },
                    'content': 'Testing Adobe images',
                },
                {
                    'type': 'text',
                    'tyle': {
                        'fontSize': 16,
                    },
                    'content': 'This image is picked from web',
                },
            ],
        },
    ],
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sampleData2: ComponentConfig = {
    'type': 'view',
    'style': {
        'flexDirection': 'column',
        'padding': 16,
    },
    'children': [
        {
            'type': 'view',
            'children': [
                {
                    'type': 'image',
                    'tyle': {
                        'width': 90,
                        'height': 90,
                        'marginBottom': 12,
                        'borderRadius': 8,
                    },
                    'content': 'https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg',
                },
            ],
        },
        {
            'type': 'view',
            'style': {
                'flexDirection': 'column',
                'padding': 14,
                'marginLeft': 12,
            },
            'children': [
                {
                    'type': 'text',
                    'tyle': {
                        'fontSize': 18,
                        'fontWeight': '400',
                    },
                    'content': 'Testing Adobe images',
                },
                {
                    'type': 'text',
                    'tyle': {
                        'fontSize': 16,
                    },
                    'content': 'This image is picked from web',
                },
            ],
        },
    ],
};

export const valuedCustomerCardData: ComponentConfig = {
    'type': 'view',
    'style': {
        'flexDirection': 'row',
        'padding': 16,
        'backgroundColor': 'white',
        'borderRadius': 8,
        'alignItems': 'center',
    },
    'children': [
        {
            'type': 'view',
            'style': {
                'width': 90,
                'height': 90,
                'backgroundColor': '#F4884A',
                'borderRadius': 8,
                'justifyContent': 'center',
                'alignItems': 'center',
                'marginRight': 16
            },
            'children': [
                {
                    'type': 'text',
                    'style': {
                        'fontSize': 40,
                        'color': '#FFF1E0',
                    },
                    'content': '🍀'
                }
            ]
        },
        {
            'type': 'view',
            'style': {
                'flexDirection': 'column',
            },
            'children': [
                {
                    'type': 'text',
                    'style': {
                        'fontSize': 24,
                        'fontWeight': 'bold',
                        'color': 'black',
                        'marginBottom': 12
                    },
                    'content': 'You just our\nvalued customer'
                },
                {
                    'type': 'view',
                    'style': {
                        'borderWidth': 1,
                        'borderColor': '#F4884A',
                        'borderRadius': 20,
                        'paddingVertical': 8,
                        'paddingHorizontal': 20,
                        'alignSelf': 'flex-start'
                    },
                    'children': [
                        {
                            'type': 'text',
                            'style': {
                                'color': '#F4884A',
                                'fontSize': 18,
                                'fontWeight': '500'
                            },
                            'content': 'See Details'
                        }
                    ]
                }
            ]
        }
    ]
};

export const splitPromotionCardData: ComponentConfig = {
    'type': 'view',
    'style': {
        'flexDirection': 'row',
        'height': 300,
        'width': '100%',
    },
    'children': [
        {
            'type': 'view',
            'style': {
                'flex': 1,
                'flexDirection': 'column',
            },
            'children': [
                {
                    'type': 'image',
                    'style': {
                        'height': 220,
                        'width': '100%',
                    },
                    'content': 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?q=80&w=600'
                },
                {
                    'type': 'view',
                    'style': {
                        'flex': 1,
                        'backgroundColor': '#c5cb40',
                        'padding': 16,
                        'justifyContent': 'space-between',
                    },
                    'children': [
                        {
                            'type': 'text',
                            'style': {
                                'color': '#000000',
                                'fontSize': 16,
                                'fontWeight': 'bold',
                            },
                            'content': 'dfdfdfdf fdfdfdfdf dfdfdf dfdfdf'
                        },
                        {
                            'type': 'view',
                            'style': {
                                'alignItems': 'flex-end',
                            },
                            'children': [
                                {
                                    'type': 'view',
                                    'style': {
                                        'backgroundColor': '#e4e4e4',
                                        'paddingVertical': 8,
                                        'paddingHorizontal': 16,
                                        'borderRadius': 4,
                                    },
                                    'children': [
                                        {
                                            'type': 'text',
                                            'style': {
                                                'color': '#000000',
                                                'fontWeight': '500',
                                            },
                                            'content': 'More Info'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            'type': 'view',
            'style': {
                'flex': 1,
                'flexDirection': 'column',
            },
            'children': [
                {
                    'type': 'image',
                    'style': {
                        'height': 220,
                        'width': '100%',
                    },
                    'content': 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600'
                },
                {
                    'type': 'view',
                    'style': {
                        'flex': 1,
                        'backgroundColor': '#1a237e',
                        'padding': 16,
                        'justifyContent': 'space-between',
                    },
                    'children': [
                        {
                            'type': 'text',
                            'style': {
                                'color': '#ffffff',
                                'fontSize': 16,
                                'fontWeight': 'bold',
                            },
                            'content': 'dfdfdfdf fdfdfdfdf dfdfdf dfdfdf'
                        },
                        {
                            'type': 'view',
                            'style': {
                                'alignItems': 'flex-end',
                            },
                            'children': [
                                {
                                    'type': 'view',
                                    'style': {
                                        'backgroundColor': '#e4e4e4',
                                        'paddingVertical': 8,
                                        'paddingHorizontal': 16,
                                        'borderRadius': 4,
                                    },
                                    'children': [
                                        {
                                            'type': 'text',
                                            'style': {
                                                'color': '#000000',
                                                'fontWeight': '500',
                                            },
                                            'content': 'Click me'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const adobeCardData: ComponentConfig = {
    'type': 'view',
    'style': {
        'borderRadius': 16,
        'overflow': 'hidden',
        'borderWidth': 1,
        'borderColor': '#E0E0E0',
    },
    'children': [
        {
            'type': 'view',
            'style': {
                'backgroundColor': '#ED1C24',
                'width': '100%',
                'height': 150,
                'justifyContent': 'center',
                'alignItems': 'center',
            },
            'children': [
                {
                    'type': 'image',
                    'style': {
                        'flex': 1,
                        'height': 150,
                    },
                    'content': 'https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg',
                }
            ]
        },
        {
            'type': 'view',
            'style': {
                'backgroundColor': 'white',
                'width': '100%',
                'flexDirection': 'row',
                'padding': 20,
            },
            'children': [
                {
                    'type': 'view',
                    'style': {
                        'flex': 1,
                        'paddingRight': 10,
                    },
                    'children': [
                        {
                            'type': 'text',
                            'style': {
                                'fontSize': 22,
                                'fontWeight': 'bold',
                                'marginBottom': 8,
                            },
                            'content': 'Title 1'
                        },
                        {
                            'type': 'text',
                            'style': {
                                'fontSize': 16,
                                'color': '#666666',
                            },
                            'content': 'Subtitle 1'
                        }
                    ]
                },
                {
                    'type': 'view',
                    'style': {
                        'flex': 1,
                        'paddingLeft': 10,
                    },
                    'children': [
                        {
                            'type': 'text',
                            'style': {
                                'fontSize': 22,
                                'fontWeight': 'bold',
                                'marginBottom': 8,
                            },
                            'content': 'Title 2'
                        },
                        {
                            'type': 'text',
                            'style': {
                                'fontSize': 16,
                                'color': '#666666',
                            },
                            'content': 'Subtitle 2'
                        }
                    ]
                }
            ]
        }
    ]
};

export const iconsGrid: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "column",
        "padding": 16,
        "borderWidth": 2,
        "borderColor": "#8862E0",
        "borderRadius": 8,
        "borderStyle": "dashed",
        "backgroundColor": "#F8F7FC",
        "alignItems": "center"
    },
    "children": [
        {
            "type": "view",
            "style": {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "width": "100%",
                "paddingVertical": 16
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "🔍"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "🏠"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "🔔"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "⌃"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "♡"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "👜"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "⋯"
                }
            ]
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "width": "100%",
                "paddingVertical": 16
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "⁘"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "📞"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "🧭"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "⌄"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "❮"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "❯"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 28,
                        "textAlign": "center"
                    },
                    "content": "★"
                }
            ]
        }
    ]
};

export const notificationPrompt: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "column",
        "borderRadius": 12,
        "overflow": "hidden",
        "backgroundColor": "white",
        "width": "100%"
    },
    "children": [
        {
            "type": "view",
            "style": {
                "backgroundColor": "#6B21A8",
                "padding": 40,
                "alignItems": "center",
                "justifyContent": "center",
                "position": "relative"
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "color": "white",
                        "fontSize": 52,
                        "fontWeight": "300",
                        "fontStyle": "italic",
                        "textAlign": "center"
                    },
                    "content": "beauty\nsquad"
                },
                {
                    "type": "text",
                    "style": {
                        "position": "absolute",
                        "top": 20,
                        "right": 20,
                        "color": "white",
                        "fontSize": 24
                    },
                    "content": "✕"
                }
            ]
        },
        {
            "type": "view",
            "style": {
                "padding": 24,
                "backgroundColor": "white",
                "alignItems": "center"
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 32,
                        "fontWeight": "bold",
                        "marginBottom": 16,
                        "textAlign": "center"
                    },
                    "content": "Be the first to know!"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 20,
                        "color": "#666666",
                        "textAlign": "center",
                        "marginBottom": 40,
                        "lineHeight": 28
                    },
                    "content": "Opt in to push notifications to get all\nthe deets on reward drops, early\naccess, bonus points, and more."
                },
                {
                    "type": "view",
                    "style": {
                        "flexDirection": "row",
                        "width": "100%",
                        "justifyContent": "space-between",
                        "gap": 16
                    },
                    "children": [
                        {
                            "type": "view",
                            "style": {
                                "flex": 1,
                                "padding": 16,
                                "borderWidth": 1,
                                "borderColor": "#000000",
                                "borderRadius": 4,
                                "alignItems": "center",
                                "justifyContent": "center"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "style": {
                                        "fontSize": 18,
                                        "fontWeight": "bold"
                                    },
                                    "content": "not right now"
                                }
                            ]
                        },
                        {
                            "type": "view",
                            "style": {
                                "flex": 1,
                                "padding": 16,
                                "backgroundColor": "#000000",
                                "borderRadius": 4,
                                "alignItems": "center",
                                "justifyContent": "center"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "style": {
                                        "fontSize": 18,
                                        "fontWeight": "bold",
                                        "color": "white"
                                    },
                                    "content": "e.l.f. yeah!"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export const subjectCards: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "row",
        "justifyContent": "space-between",
        "width": "100%",
        "padding": 12,
        "gap": 16
    },
    "children": [
        {
            "type": "view",
            "style": {
                "flex": 1,
                "backgroundColor": "#FF7A50",
                "borderRadius": 24,
                "padding": 20,
                "position": "relative",
                "height": 180,
                "justifyContent": "flex-end"
            },
            "children": [
                {
                    "type": "view",
                    "style": {
                        "position": "absolute",
                        "top": 20,
                        "left": 20
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "color": "white",
                                "fontSize": 28,
                                "fontWeight": "bold"
                            },
                            "content": "√x"
                        }
                    ]
                },
                {
                    "type": "view",
                    "style": {
                        "position": "absolute",
                        "top": 20,
                        "right": 20
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "color": "white",
                                "fontSize": 24,
                                "fontWeight": "bold"
                            },
                            "content": "⋮"
                        }
                    ]
                },
                {
                    "type": "view",
                    "style": {
                        "position": "absolute",
                        "top": 0,
                        "right": 0,
                        "width": 120,
                        "height": 120,
                        "borderBottomLeftRadius": 120,
                        "backgroundColor": "#FFB380",
                        "opacity": 0.7
                    },
                    "children": []
                },
                {
                    "type": "text",
                    "style": {
                        "color": "white",
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "content": "Mathematics"
                }
            ]
        },
        {
            "type": "view",
            "style": {
                "flex": 1,
                "backgroundColor": "#8C9EFF",
                "borderRadius": 24,
                "padding": 20,
                "position": "relative",
                "height": 180,
                "justifyContent": "flex-end"
            },
            "children": [
                {
                    "type": "view",
                    "style": {
                        "position": "absolute",
                        "top": 20,
                        "left": 20,
                        "width": 36,
                        "height": 36,
                        "borderRadius": 18,
                        "backgroundColor": "white",
                        "justifyContent": "center",
                        "alignItems": "center"
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "color": "#8C9EFF",
                                "fontSize": 24
                            },
                            "content": "🌐"
                        }
                    ]
                },
                {
                    "type": "view",
                    "style": {
                        "position": "absolute",
                        "top": 20,
                        "right": 20
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "color": "white",
                                "fontSize": 24,
                                "fontWeight": "bold"
                            },
                            "content": "⋮"
                        }
                    ]
                },
                {
                    "type": "view",
                    "style": {
                        "position": "absolute",
                        "top": 0,
                        "right": 0,
                        "width": 120,
                        "height": 120,
                        "borderBottomLeftRadius": 120,
                        "backgroundColor": "#1A237E",
                        "opacity": 0.7
                    },
                    "children": []
                },
                {
                    "type": "text",
                    "style": {
                        "color": "white",
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "content": "Geography"
                }
            ]
        }
    ]
};

export const adobeImageTemplate: ComponentConfig = {
    "type": "view",
    "style": {
        "position": "relative",
        "backgroundColor": "#E31C23",
        "borderRadius": 16,
        "overflow": "hidden",
        "width": "100%",
        "aspectRatio": "16/9"
    },
    "children": [
        {
            "type": "image",
            "style": {
                "width": "100%",
                "height": "100%",
                "position": "absolute"
            },
            "url": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
        },
        {
            "type": "view",
            "style": {
                "position": "absolute",
                "bottom": 0,
                "left": 0,
                "right": 0,
                "padding": 20,
                "justifyContent": "flex-end"
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "color": "white",
                        "fontSize": 18,
                        "fontWeight": "bold",
                        "textShadowColor": "rgba(0, 0, 0, 0.75)",
                        "textShadowOffset": "1,1",
                        "textShadowRadius": 3
                    },
                    "content": "This is an image only template"
                }
            ]
        }
    ]
};

export const frontEndGeneratedJson1: ComponentConfig = {
    "type": "view",
    "style": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "padding": 16,
        "backgroundColor": "white"
    },
    "children": [
        {
            "type": "view",
            "style": {
                "display": "flex",
                "flexDirection": "column",
                "marginLeft": 16,
                "flex": 1
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 14,
                        "fontWeight": "bold"
                    },
                    "content": "Escape to Paradise!"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 12
                    },
                    "content": "Exclusive Vacation Deals Await You"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 12
                    },
                    "content": "Unwind with our limited-time vacation offers. Book now!"
                }
            ]
        },
        {
            "type": "image",
            "style": {
                "height": 60,
                "width": 60
            },
            "url": "https://va7stagevarysstorage.blob.core.windows.net/content-generated/dbdda16d-5cb5-495b-aaca-bbeae33da2e9/firefly/ca7650cb-7204-416d-86d9-34ff820a2be2.jpeg?st=2025-04-04T18%3A59%3A16Z&se=2025-05-04T18%3A59%3A16Z&sp=r&sv=2023-01-03&sr=b&sig=C3T5gwdJ//7X/zWC9tfgzY7MbDPZXrjwiJxWWDgZ2I8%3D"
        }
    ]
}

export const specialOfferCard: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "row",
        "alignItems": "center",
        "padding": 16,
        "backgroundColor": "#FAF9F6",
        "borderRadius": 8,
        "width": "100%"
    },
    "children": [
        {
            "type": "image",
            "style": {
                "width": 100,
                "height": 100,
                "marginRight": 16
            },
            "url": "https://img.freepik.com/free-vector/sale-offer-label-banner-discount-offer-promotion_157027-1250.jpg"
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "column",
                "flex": 1,
                "justifyContent": "center"
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "color": "#222222",
                        "marginBottom": 24,
                        "lineHeight": 34
                    },
                    "content": "This offer is only for you"
                },
                {
                    "type": "view",
                    "style": {
                        "borderWidth": 1,
                        "borderColor": "#E17055",
                        "borderRadius": 24,
                        "alignSelf": "flex-start",
                        "paddingVertical": 12,
                        "paddingHorizontal": 28
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "color": "#E17055",
                                "fontSize": 14,
                                "fontWeight": "500"
                            },
                            "content": "See Details"
                        }
                    ]
                }
            ]
        }
    ]
};


