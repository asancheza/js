(function() {

window.App = {
	Models: {},
	Collections: {},
	Views: {}
};

window.template = function(id) {
	return _.template( $('#' + id).html() );
};

// Person Model
App.Models.Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest User',
		age: 30,
		occupation: 'worker',
		gender: 'male'
	}
});

// A List of People
App.Collections.People = Backbone.Collection.extend({
	model: App.Models.Person
});

// View for all people
App.Views.People = Backbone.View.extend({
	tagName: 'ul',
	
	initialize: function() {
		this.collection.on('add', this.addOne, this);
	},
	
	render: function() {
		this.collection.each(this.addOne, this);

		return this;
	},

	addOne: function(person) {
		var personView = new App.Views.Person({ model: person });
		this.$el.append(personView.render().el);
	}
});

// The View for a Person
App.Views.Person = Backbone.View.extend({
	tagName: 'li',

	template: template('personTemplate'),	
	
	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	events: {
	 'click .edit' : 'editPerson',
	 'click .delete' : 'DestroyPerson'	
	},
	
	editPerson: function(){
		var newName = prompt("Please enter the new name", this.model.get('name'));
		var newAge = prompt("Please enter the new age", this.model.get('age'));
		var newOccupation = prompt("Please enter the new occupation", this.model.get('occupation'));
		var newGender = prompt("Please enter the new gender", this.model.get('gender'));

		if (!newName) return;
		this.model.set('name', newName);
		this.model.set('age', newAge);
		this.model.set('occupation', newOccupation);
		this.model.set('gender', newGender);
	},
	
	DestroyPerson: function(){
		this.model.destroy();
	},
	
	remove: function(){
		this.$el.remove();
	},
	
	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

App.Views.AddPerson = Backbone.View.extend({
	el: '#addPerson',

	events: {
		'focusin input':'addColor',
		'focusout input':'removeColor',
		'submit': 'submit'
	},

	addColor: function(e) {
		$(e.target).parent().css("background-color", "red");
	},

	removeColor: function(e) {
		$(e.target).parent().css("background-color", "white");
	},

	submit: function(e) {
		e.preventDefault();
		var newPersonName = $(e.currentTarget).find('.name').val();
		var newPersonAge = $(e.currentTarget).find('.age').val();
		var newPersonOccupation = $(e.currentTarget).find('.occupation').val();
		var newPersonGender = $(e.currentTarget).find('.gender').val();
		
		var person = new App.Models.Person({ name: newPersonName, 
																			age: newPersonAge, 
																			occupation: newPersonOccupation, 
																			gender: newPersonGender });
		this.collection.add(person);
	}
});

var peopleCollection = new App.Collections.People([
	{
		name: 'Mohit Jain',
		age: 26,
		occupation: 'web designer',
		gender: 'male'
	},
	{
		name: 'Taroon Tyagi',
		age: 25,
		occupation: 'web designer',
		gender: 'male'
	},
	{
		name: 'Rahul Narang',
		age: 26,
		occupation: 'Java Developer',
		gender: 'male'
	}
]);

var addPersonView = new App.Views.AddPerson({ collection: peopleCollection });

peopleView = new App.Views.People({ collection: peopleCollection });

$(document.body).append(peopleView.render().el);
})();
