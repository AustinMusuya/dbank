import Debug "mo:base/Debug";
// import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currentValue : Float = 300;

  stable var startTime = Time.now();

  Debug.print(debug_show (startTime));

  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func subtract(amount : Float) {
    let tempVal : Float = currentValue - amount;
    if (tempVal > 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      return Debug.print("Number cannot be a negative");
    };
  };

  public query func total() : async Float {
    return currentValue;
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNs = currentTime -startTime;
    let timeElapsedS = timeElapsedNs / 1000000000;

    // calculate compund interest
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime; 

  };
};
