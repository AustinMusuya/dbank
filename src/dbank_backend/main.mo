import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor Dbank {
  var currentValue = 300;
  currentValue := 100;

  public func topUp(amount:Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func subtract(amount:Nat){
    let tempVal: Int = currentValue -amount;
    if (tempVal > 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));  
    };
    return Debug.print("Number cannot be a negative");
  }
}