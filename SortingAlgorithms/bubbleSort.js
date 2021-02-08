// Algorithm Name: Bubble Sort
// Time Complexity
// Best Case: O(n)
// Average Case: O(n^2)
// Worst Case: O(n^2)

function bubbleSort(numbers) {
  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength; i++) {
    let flag = false;
    for (let j = 0; j < numbersLength - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }

  console.log(numbers);
}

bubbleSort([3, 4, 1, 2, 5, 7, 8, 9, 5, 6]);
