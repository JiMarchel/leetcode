package main

import (
	// "fmt"
	"strings"
)

func prefixCount(words []string, pref string) int {
	prefix := 0
	for _, v := range words {
		if strings.HasPrefix(v, pref) {
			prefix++
		}
	}

	return prefix
}

// func main() {
// 	words := []string{"pay", "attention", "practice", "attend"}
// 	pref := "at"
// 	fmt.Println(prefixCount(words, pref))
// }

// https://leetcode.com/problems/counting-words-with-a-given-prefix/
