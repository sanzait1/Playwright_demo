// module.exports = {
//     default: `--require features/**/*.js --publish-quiet`
//   };
  module.exports = {
    default: {
      require: ['features/step_defintions/**.js', 'features/support/**.js'], // Load step definitions and hooks
      //format: ['pretty'], // Output format
      publishQuiet: true, // Disable publishing reports to the Cucumber cloud
    },
  };
  
