// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object
new Vue({
  el: '#app',
  data: {
    tasks: [
      {
        toDoItemTitle: 'First task',
        toDoItemContent: 'Example text'
      }
    ],
    toDoItemTitleInput: '',
    toDoItemContentInput: '',
    inputingItem: false,
    editingTask: false,
    taskIndex: null
  },
  methods: {
    addTask: function() {
      this.tasks.push ({
        toDoItemTitle: this.toDoItemTitleInput,
        toDoItemContent: this.toDoItemContentInput
      });
      this.toDoItemContentInput =  '';
      this.toDoItemTitleInput =  '';
      this.inputingItem = false;
    },
    deleteTask: function(i) {
      this.tasks.splice(i, 1)
    },
    cancelTask: function() {
      this.toDoItemTitleInput = '',
      this.toDoItemContentInput = '',
      this.inputingItem = false;
    },
    inputTask: function() {
      this.inputingItem = true;
    },
    editTask: function(i) {
      this.editingTask = true;
      this.toDoItemTitleInput = this.tasks[i].toDoItemTitle;
      this.toDoItemContentInput = this.tasks[i].toDoItemContent;
      this.inputingItem = true;
      this.taskIndex = i;
    },
    finishEditing: function() {
      this.tasks[this.taskIndex].toDoItemTitle = this.toDoItemTitleInput;
      this.tasks[this.taskIndex].toDoItemContent = this.toDoItemContentInput;
      this.editingTask = false;
      this.inputingItem = false;
      this.toDoItemTitleInput = '';
      this.toDoItemContentInput = '';
    }
  }
});
