
#include "dht.h"
#define dht_apin A3 // Analog Pin sensor is connected to

dht tempSensor;
int reading = 0;
int reading_final;
/**
Temperature Sensor and Heart Rate Sensor Code
by Anvitha Ramachandran
This code lets the user get their temperature read and classifies the level of fever that they have, as well as getting a plot of their heart rate sequentially.
*/

void setup()
{
  Serial.begin(9600);
  delay(500);
}

void loop()
{
  //heart rate
for (int j = 0; j < 60; i++)
{
      for(int i=0;i<10;i++)     
      {
          reading = reading + analogRead(A1);
          //calculating sum of background junk readings 10 times so that we can eliminate them afterwards.
      }
      reading_final = (reading)/10;           // Average junk reading calulated.
      delay(100);
      Serial.println(reading_final/10);   
}

  delay(500);

  //temp sensor
  Serial.println("Getting ambient/room temperature");
  // Getting ambient/room temperature to relate to body temp reading for contextualizing
  float roomTemp = 0;
  for(int i = 0; i < 50; i++)
 {
  tempSensor.read11(A3);
  roomTemp+=tempSensor.temperature;
  delay(100);
 }
 roomTemp/= 5.0;

// After five seconds, blow into the sensor
 Serial.println("Getting body temperature");
  float bodyTemp = 0;
  
   for(int i = 0; i < 50; i++)
 {
  tempSensor.read11(A3);
  bodyTemp+=tempSensor.temperature;

 }
  bodyTemp/=5.0;
  float delta = bodyTemp-roomTemp;
  float temp = float(map(delta, 1, 6, 986, 1060))/10.0 + 1.0;
  Serial.println(String(temp) " degrees Fahrenheit");
  temp -=32.0;
  temp *=5.0;
  temp/= 9.0;
  //converts to celsius so that we have options!
   Serial.println(String(temp) " degrees Celsius");
   // doesn't classify values outside of range of human temperature range
  String output = "";
  
    if(temp > 30.0 && temp <= 35.8){ output = "low body temperature";}  
    if(temp > 35.8 && temp <= 37.6) {output = "normal body temperature";}
    if(temp > 37.6 && temp <= 38.0){ output = "low fever";}
  if(temp > 38.0 && temp <= 38.5) {output= "moderate fever";}
   if(temp > 38.5 && temp <= 39.4) {output = "high fever";}
    else if(temp > 39.4 && temp <= 43.0) {output = "very high fever";}
    else{ output= "error"; }
    // verdict on temperature levels
    Serial.println(output);
  delay(5000); 
}
