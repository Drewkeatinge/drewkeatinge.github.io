class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header">
    <div class="header-image-1">
      <img
        src="../images/playstation-controller.png"
        alt="game controller"
      />
    </div>
    <div class="main-header">
      <h1>Drew Keatinge</h1>
      <div class="dev-academy-box">
        <a href="../index.html">Dev Academy Blog 2024</a>
      </div>
    </div>
    <div class="header-image-2">
      <img src="../images/microphone.png" alt="image of lucario" />
    </div>
  </div>

  <!-- end of header -->

  <!-- start of menu bar -->

  <div class="menus">
    <div class="dropdown-menu">
      <button
        id="foundation-button"
        class="drop-button"
        onclick="buttonClick(1)"
      >
        Foundations
      </button>
      <div class="dropdown-contents" id="dropdownList1">
        <a href="../blog/te-houtaewa-template.html">Te Houtaewa Template</a>
        <a href="../blog/html-css.html">Margin, Border & Padding</a>
        <a href="../blog/identity-values.html">Identity, Values & Strengths</a>
        <a href="../blog/learning-plan.html">Learning Plan</a>
        <a href="../blog/emotional-intelligence.html">Emotional Intelligence</a>
        <a href="../blog/javascript-dom.html">Javascript DOM</a>
        <a href="../blog/neuroplasticity.html">Neuroplasticity</a>
        <a href="../blog/te-whare-tapa-wha.html">Te Whare Tapa Wha</a>
      </div>
    </div>
    <div class="dropdown-menu">
      <button
        id="bootcamp-button"
        class="drop-button"
        onclick="buttonClick(2)"
      >
        Bootcamp
      </button>
      <div class="dropdown-contents" id="dropdownList2">
        <a>Placeholder</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
      </div>
    </div>
    <div class="dropdown-menu">
      <button
        id="careers-button"
        class="drop-button"
        onclick="buttonClick(3)"
      >
        Careers
      </button>
      <div class="dropdown-contents" id="dropdownList3">
        <a>Placeholder</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
      </div>
    </div>
  </div>

  <!-- Javascript for button functionality -->
    `
  }
}

customElements.define('header-component', Header)
