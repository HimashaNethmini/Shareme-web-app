export default{
    name:'save',
    title:'Save',
    type:'document',
    fields:[
        {
            name: 'postedBy',
            title:'PostedBy',
            type:'postedBy'
        },
        {
            name: 'userId', //userid of the user who save the specific pin
            title:'UserId',
            type:'string'
        },
    ]

}