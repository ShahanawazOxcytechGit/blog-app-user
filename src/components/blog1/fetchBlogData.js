const fetchBlogData = async () => {
  try {
    const response = await fetch("/api/getallblogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { result } = await response.json();

    return result;
  } catch (error) {
    console.error("Blogs Get operation error", error);
  }
};

export default fetchBlogData;
