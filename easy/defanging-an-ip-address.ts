function defangIPaddr(address: string): string {
  return address.split(".").join("[.]");
}

console.log(defangIPaddr("255.100.10.0"));

// https://leetcode.com/problems/defanging-an-ip-address/
