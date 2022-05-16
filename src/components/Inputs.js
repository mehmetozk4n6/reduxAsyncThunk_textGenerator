import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchParagraphs, changeHTML } from "../redux/paragraphSlice";

function Inputs() {
  const [paragraphCount, setParahraphCount] = useState(1);
  const [includeHTML, setIncludeHTML] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphCount}`;

    dispatch(fetchParagraphs(url));
    dispatch(changeHTML(includeHTML));
  }, [paragraphCount, includeHTML, dispatch]);

  return (
    <div className="inputs">
      <div>
        <label htmlFor="paragraphs">Paragraphs (1-10):</label>
        <input
          placeholder="1"
          type="number"
          id="paragraphs"
          name="paragraphs"
          min={1}
          max={10}
          onChange={(e) => setParahraphCount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="include-html">Include HTML</label>
        <select
          name="yesorno"
          id="include-html"
          onChange={(e) => setIncludeHTML(e.target.value)}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
    </div>
  );
}

export default Inputs;
