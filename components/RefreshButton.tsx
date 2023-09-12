export function RefreshButton() {
  return (
    <div className="p-2">
      <button
        className="p-2 bg-indigo-400 border-2 rounded-md text-white"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
}
