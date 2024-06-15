package main

import (
	"fmt"
)

func rob(nums []int) int {
	var prev1, prev2 int
	for _, num := range nums {
		prev1, prev2 = max(prev2+num, prev1), prev1
		fmt.Println(prev1, prev2)
	}

	return prev1
}

func max(n1, n2 int) int {
	if n1 > n2 {
		return n1
	}
	return n2
}

func main() {
	nums := []int{2, 7, 9, 3, 1}
	fmt.Println(rob(nums))
}

// https://leetcode.com/problems/house-robber/
