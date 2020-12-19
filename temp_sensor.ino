/**
Temperature Sensor Code
by Anvitha Ramachandran

This code lets the user get a temperature reading by pressing
a button and classifies the level of fever that they have.
*/

int tempSensor = 0; // using port A0 to receive temp sensor input
void setup()
{
  Serial.begin(9600);
}

void loop()
{
  int tempRead = analogRead(tempSensor); // gets value from sensor
  float volTemp = (tempRead*5.0)/1024.0; // converts value from sensor to voltage reading
  if(volTemp != 0) // no reading if the button isn't pressed
  {
  	float tempC = (volTemp - 0.5)*100;
    //classification of temperature – based on forehead thermometer values
    if(tempC > 30.0 && tempC <= 35.8) Serial.println("low body temperature");
  	else if(tempC > 35.8 && tempC <= 37.6) Serial.println("normal body temperature");
    else if(tempC > 37.6 && tempC <= 38.0) Serial.println("low fever");
	else if(tempC > 38.0 && tempC <= 38.5) Serial.println("moderate fever");
    else if(tempC > 38.5 && tempC <= 39.4) Serial.println("high fever");
  	else if(tempC > 39.4 && tempC <= 43.0) Serial.println("very high fever");
  	else Serial.println("error"); 
    // doesn't classify values outside of range of human temperature range
  }	
  // Arduino takes a reading every 1 second at maximum, discarding 0V readings as the button wasn't pressed
  delay(1000);
}