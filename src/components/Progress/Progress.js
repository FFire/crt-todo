import React from 'react';
import '../../styles/output.css';

export class Progress extends React.Component {
  render() {
    const { message: { text, mode } } = this.props;
    return <>
      <div className='block relative overflow-hidden p-0 mb-1 mx-2'>
        <div className="flex items-center justify-between my-2">
          <p className="text-slate-500 dark:text-black text-sm">
            {text}
          </p>
        </div>
        <div className="w-full h-3 bg-gradient-to-r from-slate-200 to-stone-200 rounded-full p-0">
          <div
              className="w-3/5 h-full rounded-full -my-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
        </div>
      </div>
    </>;
  }
}
