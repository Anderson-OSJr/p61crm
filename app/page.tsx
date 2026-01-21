import VerticalMenu from "./components/lateralMainMenu/VerticalMenu";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div>
        <VerticalMenu />
      </div>
      <div>
        <header>Header</header>
        <main>Main</main>
        <footer>Footer</footer>
      </div>
    </div>
  );
}
