"use client";

import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import styles from "./pagination.module.css";

type Props = {
  page: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) {
  // 総ページ数を計算
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  // 現在表示中の件数を計算（メモ化）
  const { currentItemsCount } = useMemo(() => {
    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);
    return {
      currentItemsCount: endItem - startItem + 1,
    };
  }, [page, itemsPerPage, totalItems]);

  // 表示するページ番号の配列を生成（最大7つ、1と最大ページは常に表示）
  const slots = useMemo(() => {
    const maxVisible = 7;
    const slotsArray: (number | null)[] = [];

    // totalPagesが0以下の場合は何も表示しない
    if (totalPages <= 0) {
      return [];
    }

    if (totalPages <= maxVisible) {
      // 総ページ数が7以下なら全て表示
      for (let i = 1; i <= totalPages; i++) {
        slotsArray.push(i);
      }
      // 残りのスロットはnull（非表示にする）
      for (let i = totalPages; i < maxVisible; i++) {
        slotsArray.push(null);
      }
    } else {
      // 1とtotalPagesは常に表示
      const firstPage = 1;
      const lastPage = totalPages;
      // 最大7つ表示: 1 + 省略記号 + 最大5つ + 省略記号 + totalPages
      // 省略記号が2つの場合: 1 + null + 最大3つ + null + totalPages = 7つ
      // 省略記号が1つの場合: 1 + 最大5つ + null + totalPages = 7つ

      if (page <= 4) {
        // 最初の方: [1, 2, 3, 4, 5, ..., totalPages]
        // 省略記号が1つなので、1から最大5つ表示
        for (let i = 1; i <= 5; i++) {
          slotsArray.push(i);
        }
        slotsArray.push(null); // 省略記号
        slotsArray.push(lastPage);
      } else if (page >= totalPages - 3) {
        // 最後の方: [1, ..., totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages]
        // 省略記号が1つなので、最後から最大5つ表示（totalPages含む）
        slotsArray.push(firstPage);
        slotsArray.push(null); // 省略記号
        for (let i = totalPages - 4; i <= totalPages; i++) {
          slotsArray.push(i);
        }
      } else {
        // 中間: [1, ..., page-2, page-1, page, page+1, page+2, ..., totalPages]
        // 省略記号が2つなので、現在のページを中心に最大5つ表示
        slotsArray.push(firstPage);
        slotsArray.push(null); // 省略記号
        
        // 現在のページを中心に5つ表示
        // ただし、1とtotalPagesは既に表示するので、2からtotalPages-1までの範囲
        let middleStart = Math.max(2, page - 2);
        let middleEnd = Math.min(totalPages - 1, page + 2);
        
        // 5つになるように調整
        const currentCount = middleEnd - middleStart + 1;
        if (currentCount < 5) {
          // 5つに満たない場合は拡張
          if (middleStart === 2) {
            // 左側が2の場合、右側を拡張
            middleEnd = Math.min(totalPages - 1, middleStart + 4);
          } else if (middleEnd === totalPages - 1) {
            // 右側が最後の場合、左側を拡張
            middleStart = Math.max(2, middleEnd - 4);
          }
        }
        
        for (let i = middleStart; i <= middleEnd; i++) {
          slotsArray.push(i);
        }
        
        slotsArray.push(null); // 省略記号
        slotsArray.push(lastPage);
      }
    }

    return slotsArray;
  }, [page, totalPages]);

  return (
    <div className={styles.paginationContainer}>
      {/* 左側：件数表示 */}
      <div className={styles.itemsInfo}>
        {currentItemsCount}件表示 / {totalItems}件
      </div>

      {/* 中央：ページネーションコントロール */}
      <div className={styles.paginationControls}>
        <button
          className={styles.navButton}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          aria-label="前のページ"
        >
          <ChevronLeftIcon />
        </button>

        <div className={styles.pageNumbers}>
          {slots.map((pageNum, index) => {
            if (pageNum === null) {
              // 前後のページ番号を確認して、省略記号を表示するか判断
              const prevPage = index > 0 ? slots[index - 1] : null;
              const nextPage = index < slots.length - 1 ? slots[index + 1] : null;
              
              // 前後のページ番号が存在し、連続していない場合のみ省略記号を表示
              if (prevPage !== null && nextPage !== null && nextPage - prevPage > 1) {
                return (
                  <span key={`slot-${index}`} className={styles.ellipsis}>
                    ...
                  </span>
                );
              }
              // それ以外の場合は非表示
              return null;
            }
            return (
              <button
                key={`slot-${index}`}
                className={`${styles.pageButton} ${
                  pageNum === page ? styles.active : ""
                }`}
                onClick={() => handlePageChange(pageNum)}
                aria-label={`ページ ${pageNum}`}
                aria-current={pageNum === page ? "page" : undefined}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          className={styles.navButton}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="次のページ"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
