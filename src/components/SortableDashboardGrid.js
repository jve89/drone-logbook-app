import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      handle: '.drag-handle', // Only allow drag via handle
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none',
    position: 'relative', // Needed for the handle to be positioned inside
  };

  return (
    <div ref={setNodeRef} style={style}>
      {/* ✅ Drag handle */}
      <div
        className="drag-handle"
        {...attributes}
        {...listeners}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          cursor: 'grab',
          fontSize: '1.25rem',
          color: '#aaa',
          userSelect: 'none',
          opacity: 0.6,
          padding: '0.25rem',
          borderRadius: '4px',
          background: 'rgba(255, 255, 255, 0.7)',
          transition: 'opacity 0.2s',
        }}
      >
        ☰
      </div>

      {/* ✅ Tile content */}
      {children}
    </div>
  );
};

const SortableDashboardGrid = ({ tiles }) => {
  const [items, setItems] = useState(tiles.map((tile) => tile.id));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) =>
        arrayMove(items, items.indexOf(active.id), items.indexOf(over.id))
      );
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1rem',
          }}
        >
          {items.map((id) => {
            const tile = tiles.find((t) => t.id === id);
            return (
              <SortableItem key={id} id={id}>
                {tile?.element}
              </SortableItem>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableDashboardGrid;
