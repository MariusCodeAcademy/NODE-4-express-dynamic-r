# Express

1. npm init
1. npm i express cors morgan

## uzd

1. GET /api/people/male (grazinam visus vyrus)
1. 1. sukuriam endpoint
1. const males = people.filter((person) => person.sex === 'male');
1. console.log('males ===', males);
1. 2. paieskom su filter ar kazkaip atrenkam vyrus
1. 3. grazinam vyru masyva

1. GET /api/people/gender/:sex
1. (jei sex === male atrenkam male)
1. (jei sex === female atrenkam female)
1. (jei sex === nei male nei female pranesam apie klaida su status 400)

1. GET /api/people/drivers (grazinam zmones turincius automobili)

1. GET /api/people/over30 (grazinam zmones kuriu amzius daugiau nei 30)

1. GET /api/people/over/:age (grazinam zmones kuriu amzius daugiau nei :age)

1. GET /api/people/income/avg (grazinam zmoniu atlyginimu vidurki)

1. GET /api/people/income/below/:salary (grazinam zmoniu masyva kurie uzdirba maziau nei :salary)
   //PVZ /api/people/income/below/1500

1. GET /api/people/married (grazinam vedusius zmones)
