package main

import "fmt"

func smallerNumbersThanCurrent(nums []int) []int {
	result := make([]int, len(nums))

	for i := 0; i < len(nums); i++ {
		count := 0
		for j := 0; j < len(nums); j++ {
			if nums[j] < nums[i] {
				count++
			}
		}
		result[i] = count
	}

	return result
}

func main() {
	arr := []int{8, 1, 2, 2, 3}
	fmt.Println(smallerNumbersThanCurrent(arr))
}
