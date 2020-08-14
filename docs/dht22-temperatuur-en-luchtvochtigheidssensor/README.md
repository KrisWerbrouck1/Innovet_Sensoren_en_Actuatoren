---
title: DHT22 temperatuur- en luchtvochtigheidssensor
---

# DHT22 temperatuur- en luchtvochtigheidssensor

De DHT 22 is een temperatuur- en luchtvochtigheidssensor. De data wordt digitaal verzonden over 1 datapin.

![DHT22](./assets/DHT22.png)

## Aansluitschema

![DHT22 aansluitschema](./assets/DHT22Aansluitschema.png)

## Voorbeeldprogramma

Het voorbeeldprogramma is geschikt voor zowel de arduino UNO als voor de ESP8266.

Het is nodig vooraf de nodige bibliotheken te downloaden.

```cpp
/* How to use the DHT-22 sensor with Arduino uno
   Temperature and humidity sensor
*/

//Libraries
#include <DHT.h>;

//Constants
#define DHTPIN 2     // what pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302)
DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino


//Variables
int chk;
float hum;  //Stores humidity value
float temp; //Stores temperature value

void setup()
{
  Serial.begin(9600);
  dht.begin();
}

void loop()
{
    delay(2000);
    //Read data and store it to variables hum and temp
    hum = dht.readHumidity();
    temp= dht.readTemperature();
    //Print temp and humidity values to serial monitor
    Serial.print("Humidity: ");
    Serial.print(hum);
    Serial.print(" %, Temp: ");
    Serial.print(temp);
    Serial.println(" Celsius");
    delay(10000); //Delay 2 sec.
}
```
## Leverancier

De DHT22 is o.a. te koop bij opencircuit [opencircuit.nl](https://opencircuit.nl/Product/DHT22-Luchtvochtigheid-en-temperatuur-sensor) 

## Bron

[create.arduino.cc](https://create.arduino.cc/projecthub/mafzal/temperature-monitoring-with-dht22-arduino-15b013) 
