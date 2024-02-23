let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    drive: function() {
        console.log("The " + this.brand + " " + this.model + " is being driven.");
    }
};

car.drive();
