package main

import (
	"fmt"
	"strings"
)

func stringMatching(words []string) []string {
	result := []string{}

	for i := 0; i < len(words); i++ {
		for j := 0; j < len(words); j++ {
			if i != j && strings.Contains(words[j], words[i]) {
				result = append(result, words[i])
				break
			}
		}
	}

	return result
}

func main() {
	arr := []string{"mass", "as", "hero", "superhero"}
	fmt.Println(stringMatching(arr))
}

// https://leetcode.com/problems/string-matching-in-an-array/
