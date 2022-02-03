# Express

1. npm init
1. npm i express cors morgan

## uzd

1. GET /api/people/male (grazinam visus vyrus)
   1.sukuriam endpoint
   const males = people.filter((person) => person.sex === 'male');
   console.log('males ===', males);
2. paieskom su filter ar kazkaip atrenkam vyrus
3. grazinam vyru masyva

4. GET /api/people/gender/:sex
   (jei sex === male atrenkam male)
   (jei sex === female atrenkam female)
   (jei sex === nei male nei female pranesam apie klaida su status 400)

5. GET /api/people/drivers (grazinam zmones turincius automobili)

6. GET /api/people/over30 (grazinam zmones kuriu amzius daugiau nei 30)

7. GET /api/people/over/:age (grazinam zmones kuriu amzius daugiau nei :age)

8. GET /api/people/income/avg (grazinam zmoniu atlyginimu vidurki)

9. GET /api/people/income/below/:salary (grazinam zmoniu masyva kurie uzdirba maziau nei :salary)
   // PVZ /api/people/income/below/1500

10. GET /api/people/married (grazinam vedusius zmones)
