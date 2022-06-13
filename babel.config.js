

module.exports = {
    presets: [
      ["@babel/preset-env", {targets: {node: "current"} }]  , 
      ["@babel/preset-react"]
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true  , "loose" : true  }],
        
        ["@babel/plugin-proposal-class-properties", { }]
        
      ],
      assumptions : {

        "setPublicClassFields": true
      
      }
       
    
};