const list = fetch(
  "https://dev-assignment.ew.r.appspot.com/search?q=Katy%20Perry&limit=5&off"
)
  .then((res) => res.json())
  .then(
    (result) => {
      //   this.setState({
      //     isLoaded: true,
      //     items: result.items,
      //   });
      console.log(result);
    },
    (error) => {
      //   this.setState({
      //     isLoaded: true,
      //     error,
      //   });
    }
  );

export default list;
