import "./Radio.css";
import tick from "../../images/tick.png";

function Radio() {
  return (
    <form>
      <h2>CSS Radio Buttons and Checkboxes: Custom icon</h2>
      <h5>Checkboxes and radio buttons with a custom tick icon: Pure CSS.</h5>
      <p>
        <em>Uses Font Awesome for demo.</em>
      </p>
      <br></br>

      <h3>Radio Buttons</h3>
      <div>
        <input
          src={tick}
          id="radio-1"
          class="radio-custom"
          name="radio-group"
          type="radio"
          checked
        />
        <label for="radio-1" class="radio-custom-label">
          First Choice
        </label>
      </div>
      <div>
        <input
          src={tick}
          id="radio-2"
          class="radio-custom"
          name="radio-group"
          type="radio"
        />
        <label for="radio-2" class="radio-custom-label">
          Second Choice
        </label>
      </div>
      <div>
        <input
          src={tick}
          id="radio-3"
          class="radio-custom"
          name="radio-group"
          type="radio"
        />
        <label for="radio-3" class="radio-custom-label">
          Third Choice
        </label>
      </div>

      <h3>Checkboxes</h3>
      <div>
        <input
          id="checkbox-1"
          class="checkbox-custom"
          name="checkbox-1"
          type="checkbox"
          checked
        />
        <label for="checkbox-1" class="checkbox-custom-label">
          First Choice
        </label>
      </div>
      <div>
        <input
          id="checkbox-2"
          class="checkbox-custom"
          name="checkbox-2"
          type="checkbox"
        />
        <label for="checkbox-2" class="checkbox-custom-label">
          Second Choice
        </label>
      </div>
      <div>
        <input
          id="checkbox-3"
          class="checkbox-custom"
          name="checkbox-3"
          type="checkbox"
        />
        <label for="checkbox-3" class="checkbox-custom-label">
          Third Choice
        </label>
      </div>
    </form>
  );
}

export default Radio;
