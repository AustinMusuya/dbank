import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";

actor Dbank {
  stable var currentValue = 300;

  let startTime = Time.now();

  Debug.print(debug_show (startTime));

  public func topUp(amount : Nat) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func subtract(amount : Nat) {
    let tempVal : Int = currentValue - amount;
    if (tempVal > 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      return Debug.print("Number cannot be a negative");
    };
  };

  public query func total() : async Nat {
    return currentValue;
  };
};
