import GridMasonry from 'GridMasonry';
//Слушаем событие загрузки страницы
document.addEventListener('DOMContentLoaded', e => {
  //Создаем экземпляр класса с настройками и запускаем функцией init()
  let Masonry = new GridMasonry({
    containerClass: '.grid-masonry', //Контейнер для элементов сетки
    itemClass: '.grid-masonry-item', //Каждый элемент сетки
    itemContentClass: '.grid-masonry-item__container', //Контейнер внутри каждого элемента стеки
    gridRowGap: '8px', //Верхний и нижний отступ
    gridColumnGap: '8px', //Правый и левый отступ
    itemMinWith: '138px', //Минимальная ширина одного элемента сетки
    itemMaxWith: '283px', //Максимальная ширина одного элемента сетки, для работы адаптива нужно значение в единицах изменения fr
  }).init();
});
