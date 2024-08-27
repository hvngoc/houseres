# Simple Code Development

Programming language: Kotlin

## Installation

Make sure you have installed Android Studio first. If not? you can visit [here](https://developer.android.com/studio)

Download and build this project. Then just ^+R to install app to your local device.

## Notes

```python
App architecture: MVVM with LiveData
Code structure: include 3 packages domain,data,presentation similar to Clean Architecture Components.
UnitTests: simple code for mocking api that throw error. ./gradlew :app:assembleDebugAndroidTest
Exception handling: get message from api and display it.
Cache: there is no sqite database. it uses local file to cache response from api (cache time out = 30 minutes)
Secure Android: NO
Disability support: Scaling Text
```
![alt text](https://raw.githubusercontent.com/hvngoc/wakadana/master/showup.png)
### Libraries:
Serialize: Gson [https://github.com/google/gson](https://github.com/google/gson)

Networking: Retrofit [https://square.github.io/retrofit](https://square.github.io/retrofit)

Thread management: coroutines [https://developer.android.com/kotlin/coroutines](https://developer.android.com/kotlin/coroutines)

Dependencies injection: Koin [https://insert-koin.io/](https://insert-koin.io/)

DiffUtil: Epoxy [https://github.com/airbnb/epoxy](https://github.com/airbnb/epoxy)


## Usage
After open this app, you need to fill more than 3 characters to the top TextField so that it loads data.