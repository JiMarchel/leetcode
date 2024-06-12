package main

import "fmt"

func runningSum(nums []int) []int {
	// Buat slice baru dengan panjang yang sama dengan nums untuk menampung hasil running sum
	sums := make([]int, len(nums))

	// Inisialisasi elemen pertama
	sums[0] = nums[0]

	// Loop melalui elemen yang tersisa
	for i := 1; i < len(nums); i++ {
		sums[i] = sums[i-1] + nums[i]
	}

	return sums
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(runningSum(nums))
}

// https://leetcode.com/problems/running-sum-of-1d-array/
