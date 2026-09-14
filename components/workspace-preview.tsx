"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { views } from "@/lib/demo-data";

const tabs = [
  { id: "strategy", label: "Strategy", icon: "◎" },
  { id: "storefront", label: "Storefront", icon: "▧" },
  { id: "marketing", label: "Marketing", icon: "↗" },
  { id: "approvals", label: "Approvals", icon: "✓" },
] as const;
type View = (typeof tabs)[number]["id"];

export default function WorkspacePreview() {
  const [view, setView] = useState<View>("strategy");
  const [approved, setApproved] = useState<number[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const data = view === "approvals" ? null : views[view];

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    setView(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return <div className="workspace">
    <aside>
      <a className="brand mini" href="#">✳ SPACZE</a>
      <div className="workspace-name"><span className="avatar">O</span><div>Olive Studio<small>Demo workspace</small></div></div>
      <p className="sidebar-label">YOUR WORKSPACE</p>
      <div role="tablist" aria-label="Workspace preview">
        {tabs.map((tab, index) => <button key={tab.id} type="button" role="tab"
          ref={element => { tabRefs.current[index] = element; }}
          id={"tab-" + tab.id} aria-controls="panel" aria-selected={view === tab.id}
          tabIndex={view === tab.id ? 0 : -1} onClick={() => setView(tab.id)}
          onKeyDown={event => navigate(event, index)}>
          {tab.icon} <span>{tab.label}</span>
          {tab.id === "approvals" && <span className="count">{2 - approved.length}</span>}
        </button>)}
      </div>
      <div className="sidebar-bottom"><span className="live-dot" /> Space to do more.</div>
    </aside>
    <div className="dashboard">
      <div className="dashboard-top"><span>Olive Studio <span className="muted">/</span> {tabs.find(tab => tab.id === view)?.label}</span><span className="avatar">TS</span></div>
      <div id="panel" ref={panelRef} role="tabpanel" aria-labelledby={"tab-" + view} tabIndex={0}>
        {data ? <>
          <div className="panel-header"><div><h3>{data.title}</h3><p>{data.subtitle}</p></div><span className="pill">{data.badge}</span></div>
          <div className="stats">{data.stats.map(([label, value, note]) => <div className="stat" key={label}><small>{label}</small><strong>{value}</strong><p>{note}</p></div>)}</div>
          <div className="insight"><article className="feature-card"><span className="eyebrow">✳ A POSSIBLE NEXT MOVE</span><h4>{data.heading}</h4><p>{data.copy}</p></article>
          <article className="task-card"><h4>Your next steps</h4>{data.tasks.map(task => <div className="task" key={task}>{task}</div>)}</article></div>
        </> : <>
          <div className="panel-header"><div><h3>Your call. Every time.</h3><p>Review suggestions before they become actions.</p></div><span className="pill">Demo decisions</span></div>
          {["Launch campaign copy", "Collection introduction"].map((title, index) => <article className="approval" key={title}>
            <div><h4>{title}</h4><p>{approved.includes(index) ? "Approved in this demo only." : "Draft suggestion · Ready for your review"}</p></div>
            <button type="button" className="button" disabled={approved.includes(index)} onClick={() => {
              setApproved(previous => previous.includes(index) ? previous : [...previous, index]);
              panelRef.current?.focus();
            }}>{approved.includes(index) ? "Approved ✓" : "Approve demo"}</button>
          </article>)}
          <p className="demo-note" role="status">{approved.length} of 2 demo suggestions approved. Reloading resets these decisions.</p>
        </>}
      </div>
      <p className="demo-note">Preview only. Actions stay in this demo; nothing is published or sent.</p>
    </div>
  </div>;
}
