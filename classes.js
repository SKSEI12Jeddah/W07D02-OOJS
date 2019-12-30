class ATM {

    constructor(type) // initialize the atm instance by type giving , zero amount and empty transactionHistory array 
    {
        this.type = type;
        this.money = 0; 
        this.transactionHistory = [];
    }

    withdraw(amount)
    { // if there is enough money take the amount from the balance and add the operation to the transactionHistory
         if (amount <= this.money)
            { this.money -= amount;
                this.transactionHistory.push({"withdrow" : amount});
            }

         else 
            console.log("No enough money");
    }

    deposit(amount)
    {
        this.money += amount;
        this.transactionHistory.push({"deposit" : amount});
    }

    showBalance()
    {
        console.log(`Your balance is ${this.money}`);

    }

}

let atm = new ATM("checking");
atm.deposit(1000);
atm.withdraw(200);
atm.showBalance();
console.log(atm.transactionHistory);
atm.withdraw(2000);


//////////////////////////////////////////////////////////



class RecordAlbums{

    constructor( artistName , albumName , songs , currentSong) {
        this.artistName = artistName
        this.albumName = albumName
        this.songs = songs
        this.currentSong = currentSong   
        }
 
     next_song() {
         let index = this.songs.indexOf(this.currentSong) // get the index of the current song 
         let n = this.songs.length 

        if (index == n-1) // if it is the last song 
        return this.songs[0];
        return this.songs[index + 1];
        
        // we can simply solve it in one line using the modulus 
        // return this.songs[(index + 1) % (this.songs.length)]; // this return the song in the index after current 
        // modulus is to move to the first element again when the current is the last song 
        }
    
     previous_song(){
       let index = this.songs.indexOf(this.currentSong) // get the index of the current song 
       let n = this.songs.length 
       if (index == 0)
       return this.songs[n - 1];
       return this.songs[index - 1];

       // again we can simply solve it in one line using the modulus 
       //return this.songs[(index + n - 1) % n]; // this return the song in previous index of current
       // modulus is to move to the last when the current is the first
       
        }

        get artistName() {
            return this._artistName;
        }

  set artistName(newName) {
            this._artistName = newName; 
        }


}
let album =new RecordAlbums( "John Lennon", "Imagine", ["Imagine", "Crippled Inside", "Jealous Guy", "It's So Hard", "I Don't Want to Be a Soldier", "Gimme Some Truth" ,"Oh My Love"],"Oh My Love")
 
console.log(album.next_song())


/////////////////////////////////////////////////////

class Car{
    constructor(make, model, year, color, seats, passengers=[]){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.seats = seats;
      this.previousOwners = [];
      this.owner = "manufacturer";
      this.running = false;
      this.passengers = passengers;
    }
  
    sell(newOwner){
      this.previousOwners = this.owner;
      this.owner = newOwner;
    }
  
    paint(newColor){
      this.color = newColor;
    }
  
    start(){
      this.running = true;
    }
  
    off(){
      this.running = false;
    }
  
    driveTo(destination){
      if (!this.running)
        return false;
      console.log(`driving to ${destination}`); // if we arrive here then return false did not execute so it did not enter the if statement
      return true; 
    }
  
    park(){
      if (this.running)
        return false;
      console.log(`Parked !!`);
      return true; 
    }
  
    pickUp(name){
      if(this.running && this.passengerCount() < this.seats-1) // minus the seat for the driver
        {
          console.log(`driving to pick up ${name}`)
          this.passengers.push(name);
          return true;
        }
      return false;
    }
  
    dropOff(name){
       if(!this.running && this.passengers.indexOf(name) !=-1)
       {
         console.log(`driving to drop off ${name}`)
        this.passengers.splice(this.passengers.indexOf(name), 1);
         return true;
       } 
       return false;
    }
    passengerCount(){
      return this.passengers.filter(passenger => passenger !== null).length 
    }
  }
  
  let car = new Car("Hyundai", "creta", "2020", "red", "5");
  car.paint("yellow");
  console.log(car.color);
  car.start();
  console.log(car.pickUp("Celine"))
  console.log(car.pickUp("Sally"))
  console.log(car.pickUp("Suzy"))
  console.log(car.pickUp("Tamara"))
  console.log(car.pickUp("Sara"))
  console.log(car.passengerCount())
  car.off()
  console.log(car.dropOff("Celine"))
  console.log(car.dropOff("Sara"))
  console.log(car.dropOff("Sally"))
  console.log(car.passengerCount())
  