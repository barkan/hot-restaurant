// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var waitingArray = [
	// objects representing customers on the waiting list go here
	// you may want to start with some hard-coded for testing
	{
		customerName: "Max",
		customerEmail: "max@example.com",
		customerID: "butterypanda",
		phoneNumber: "999-999-9999"
	},
	{
		customerName: "Tom",
		customerEmail: "tom@example.com",
		customerID: "tchup",
		phoneNumber: "222-222-2222"
	}
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;
