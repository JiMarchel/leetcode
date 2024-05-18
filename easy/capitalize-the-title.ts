const capitalizeTitle = (title: string) =>
  title
    .split(" ")
    .map((s) =>
      s.length > 2
        ? s[0].toUpperCase() + s.slice(1).toLowerCase()
        : s.toLowerCase(),
    )
    .join(" ");

console.log(capitalizeTitle("wkwk arigatou ok"));
