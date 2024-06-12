package main

func findLucky(arr []int) int {
	freqMap := make(map[int]int)

	for _, num := range arr {
		freqMap[num]++
	}

	lucky := -1
	for num, freq := range freqMap {
		if num == freq && num > lucky {
			lucky = num
		}
	}

	return lucky
}

// func main() {
// 	arr := []int{2, 2, 3, 4}
// 	fmt.Println(findLucky(arr))
// }
