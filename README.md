# App.js
Головний компонент, який підключає два компоненти форм:

```
  <ControlledForm />
  <UncontrolledForm />
```
# ControlledForm
Форма з повним контролем стану через useState.

Основні поля:
Message – текстове поле.

I agree to the terms – чекбокс.

Select country – випадаючий список країн.  

```
 (через <CountrySelect />).
 ```

Присутня валідація: поле повинне бути заповнене, Чекбокс - позначений, а країна - обрана.

# CountrySelect

Компонент для завантаження та відображення списку країн.

Логіка запиту:
Запит до API:

```
https://restcountries.com/v3.1/all
```

Дані обробляються та сортуються: виводиться код країни та назва.

# UncontrolledForm
Форма без використання стану, значення читаються через ref.
Значення зчитується напряму під час сабміту (помилки та повідомлення також після сабміту).




