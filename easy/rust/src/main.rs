pub mod thousand_separator;

fn main() {
    let res = thousand_separator::thousand_separator(22142000);
    println!("{}", res);
}
