module.exports = {
    // Функция для нахождения суммы элементов массива
    sumArray: function(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
    },
    // Функция для получения уникальных элементов массива
    uniqueArray: function(arr) {
      return Array.from(new Set(arr));
    }
  };