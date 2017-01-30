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
    inputingItem: false, // tracks whether the input areas are empty or not
    editingTask: false, // tracks whether user is editing a task or creating a new one
    taskIndex: null // keeps track of selected task's index number during editing
  },
  methods: {
    addTask: function() {
      // pushs title and content to tasks array
      this.tasks.push ({
        toDoItemTitle: this.toDoItemTitleInput,
        toDoItemContent: this.toDoItemContentInput
      });
      this.toDoItemContentInput =  '';
      this.toDoItemTitleInput =  '';
      this.inputingItem = false;
    },
    deleteTask: function(i) {
      // removes tasks[index] from the array, deletes task card
      this.tasks.splice(i, 1)
    },
    cancelTask: function() {
      // removes current input text
      this.toDoItemTitleInput = '';
      this.toDoItemContentInput = '';
      this.inputingItem = false;
      this.editingTask = false;
    },
    inputTask: function() {
      // called when user inputs text in title or content, displays cancel button
      this.inputingItem = true;
    },
    editTask: function(i) {
      // sends the selected task's title and content back down to input area
      this.editingTask = true;
      this.toDoItemTitleInput = this.tasks[i].toDoItemTitle;
      this.toDoItemContentInput = this.tasks[i].toDoItemContent;
      this.inputingItem = true;
      this.taskIndex = i;
    },
    finishEditing: function() {
      // updates array with new input values from the editTask function
      this.tasks[this.taskIndex].toDoItemTitle = this.toDoItemTitleInput;
      this.tasks[this.taskIndex].toDoItemContent = this.toDoItemContentInput;
      this.editingTask = false;
      this.inputingItem = false;
      this.toDoItemTitleInput = '';
      this.toDoItemContentInput = '';
    }
  }
});
